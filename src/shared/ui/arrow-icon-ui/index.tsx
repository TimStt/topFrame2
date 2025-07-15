import React, { SVGProps } from 'react'

import ArrowIcon from '@/source/icons/arrow.svg'

export const ArrowIconUI: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return <ArrowIcon {...props} />
}
