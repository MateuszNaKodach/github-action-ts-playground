import * as core from '@actions/core'
import {CSharpGenerator} from '@asyncapi/modelina'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())
    const generator = new CSharpGenerator()

    core.setOutput('time', generator)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
