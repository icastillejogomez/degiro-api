const DEBUG = !!process.env.DEGIRO_DEBUG
export const debug = DEBUG ? (...s: any) => console.log(...s) : () => {}