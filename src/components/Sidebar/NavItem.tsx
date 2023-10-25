import { ChevronDown } from 'lucide-react'
import { ComponentProps, ElementType } from 'react'

export interface NavItemProps extends ComponentProps<"button"> {
  title: string
  icon: ElementType
  showExpandIcon?: boolean
}

export function NavItem({ title, icon: Icon, showExpandIcon = true, ...rest }: NavItemProps) {
  return (
    <button
      className="group flex items-center gap-3 rounded px-3 py-2 w-full hover:bg-violet-50 hover:cursor-pointer dark:hover:bg-zinc-800"
      {...rest}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      {showExpandIcon && 
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
      }
    </button>
  )
}