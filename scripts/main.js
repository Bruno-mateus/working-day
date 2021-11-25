const Total = new Date()
const btn = document.querySelector('#btn')

const hours = {
  total() {
    hours.entryHour = Number(document.querySelector('#entry-hour').value)
    hours.breakHour = Number(document.querySelector('#break-hour').value)
    hours.breakBackHour = Number(
      document.querySelector('#break-back-hour').value
    )
    hours.journeyHour = Number(document.querySelector('#journey-hour').value)
  }
}

const minutes = {
  total() {
    minutes.entryMinute = Number(document.querySelector('#entry-minute').value)
    minutes.breakMinute = Number(document.querySelector('#break-minute').value)
    minutes.breakBackMinute = Number(
      document.querySelector('#break-back-minute').value
    )
    minutes.journeyMinute = Number(
      document.querySelector('#journey-minute').value
    )
  }
}

function min(entryMinute, breakMinute, breakBackMinute, journeyMinute) {
  let CalcBreakMinute = Math.abs(breakMinute - breakBackMinute)

  let result

  breakMinute < breakBackMinute
    ? (result = entryMinute + journeyMinute + Math.abs(CalcBreakMinute))
    : (result = entryMinute + journeyMinute - Math.abs(CalcBreakMinute))

  Total.setMinutes(result)
}

function hour(entryHour, breakHour, breakBackHour, journeyHour) {
  let calcBreakHour = Math.abs(breakHour - breakBackHour)

  let result = entryHour + journeyHour + Math.abs(calcBreakHour)

  Total.setHours(result)
}

btn.addEventListener('click', () => {
  hours.total()
  minutes.total()
  hour(hours.entryHour, hours.breakHour, hours.breakBackHour, hours.journeyHour)
  min(
    minutes.entryMinute,
    minutes.breakMinute,
    minutes.breakBackMinute,
    minutes.journeyMinute
  )

  document.querySelector('#result span').innerHTML = `
	${JSON.stringify(Total.getHours()).padStart(2, '0')}:${JSON.stringify(
    Total.getMinutes()
  ).padStart(2, '0')}

	`
})
