import { JSDOM } from 'jsdom'

export default async function foo() {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello</p>`)
  const response = await fetch('https://github.com/users/TAULO/contributions')
  const htmlAsText = await response.text()
  const parser = new dom.window.DOMParser()
  const doc = parser.parseFromString(htmlAsText, 'text/html')

  const weeks: WeekSchedule = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  }

  interface ContributionToolTip {
    forAttribute: string | null;
    text: string | null;
  }

  interface Contribution {
    id: string | null;
    date: string | null;
    level: string | null;
  }

  type WeekSchedule = {
    sunday: Contribution[];
    monday: Contribution[];
    tuesday: Contribution[];
    wednesday: Contribution[];
    thursday: Contribution[];
    friday: Contribution[];
    saturday: Contribution[];
  };

  const contributionToolTips: ContributionToolTip[] = [...doc.querySelectorAll('tool-tip')].map(toolTip => ({
    forAttribute: toolTip.getAttribute('for'),
    text: toolTip.textContent
  }))

  const contributionCalender: Contribution[] = [...doc.querySelectorAll('.ContributionCalendar-day')].map(contribution => ({
    id: contribution.getAttribute('id'),
    date: contribution.getAttribute('data-date'),
    level: contribution.getAttribute('data-level')
  })).filter(contribution => contribution.date)

  const contributionCalenderWeekChunks = contributionCalender.reduce((acc: any, item: Contribution): any => {
    const date = new Date(item.date ?? "").getDay()

    Object.keys(weeks).forEach((key, index) => {
      if (date === index) {
        if (!acc[key]) acc[key] = []
        acc[key].push(item)
      }
    })

    return acc
  }, {})

  return { contributionCalender, contributionToolTips, contributionCalenderWeekChunks }
}

