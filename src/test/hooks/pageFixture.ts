import {Page} from '@playwright/test'
import { log } from 'console'
import { Logger } from 'winston'

export const pageFixture = {
    // @ts-ignore
    page : undefined as Page,
    // @ts-ignore
    log : undefined as Logger
}