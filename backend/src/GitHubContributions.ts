import { JSDOM } from 'jsdom';

export default async function foo() {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello</p>`);
  const response = await fetch("https://github.com/users/TAULO/contributions");
  const htmlAsText = await response.text();
  const parser = new dom.window.DOMParser();
  const doc = parser.parseFromString(htmlAsText, "text/html");

  interface ContributionToolTip {
    forAttribute: string | null;
    text: string | null;
  }

  interface Contribution {
    id: string | null;
    date: string | null;
    level: string | null;
  }

  const contributionToolTips: ContributionToolTip[] = [...doc.querySelectorAll("tool-tip")].map(toolTip => ({
    forAttribute: toolTip.getAttribute("for"),
    text: toolTip.textContent,
  }));

  const contributionCalender: Contribution[] = [...doc.querySelectorAll(".ContributionCalendar-day")].map(contribution => ({
    id: contribution.getAttribute("id"),
    date: contribution.getAttribute("data-date"),
    level: contribution.getAttribute("data-level"),
  })).filter(contribution => contribution.date);


  const contributionCalenderChunks: Contribution[][] = contributionCalender.reduce(
    (acc: Contribution[][], item: Contribution, index): Contribution[][] => {
      if (index % 53 === 0) acc.push([]);
      acc[acc.length - 1].push(item);

      return acc;
    },
    []
  );

  return { contributionCalender, contributionToolTips, contributionCalenderChunks }
}

