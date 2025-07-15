import classNames from 'classnames'

export const cls = (...classes: (string | undefined)[]) => {
  return classNames(...classes)
}
