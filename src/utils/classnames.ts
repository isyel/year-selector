import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: any[]) => twMerge(classNames(...args))
