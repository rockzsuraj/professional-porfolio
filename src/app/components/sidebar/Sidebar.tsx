
import Icon from '../icons/icons';
import { icons } from '@/lib/constants';

export default function Sidebar() {

  return (
    <aside className="h-full w-30">
      <div className='h-full'>
        <div className='h-full fixed flex-1 flex-col w-30'>
          <div className="h-1/6 w-0.5 bg-gray ml-auto mr-auto" />
          <div className="flex flex-col items-center">
            {icons.map(icon => {
              return <Icon url={icon.url} key={icon.alt} src={icon.src} alt={icon.alt} />
            })}
          </div>
        </div>

        <div className="h-1/2" />
        <div className="w-40 border-1 border-(--color-gray) h-40 -translate-x-1/2" />
        <div className="h-1/4" />
        <div className="transform -translate-x-1/6">
          <Icon src="dots.svg" alt="dots" width={70}/>
        </div>
        <div className='h-1/8' />
      </div>
    </aside>
  )
}
