import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const reports = await degiro.getAccountReports()
  console.log(reports)

  // Inside report object you can find `uri` property, but that URL is associated with the current session
  // As soon as you sign out, the URL will be no longer available
  // await degiro.logout()
})()
