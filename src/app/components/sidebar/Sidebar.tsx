import Icon from '../icons/icons';

export default function Sidebar() {
  const icons = [
    {
      src: 'github.svg',
      alt: 'github'
    },
    {
      src: 'linkedin.svg',
      alt: 'linkedin'
    },
    {
      src: 'email.svg',
      alt: 'email'
    }
  ]
  return (
    <aside className="h-full w-30">
      <div className='h-full flex flex-col'>
        <div className="h-1/6 w-0.5 bg-gray ml-auto mr-auto" />
        <div className="ml-auto mr-auto">
          {icons.map(icon => {
            return <Icon key={icon.alt} src={icon.src} alt={icon.alt} />
          })}
        </div>
        <div className="h-1/2" />
        <div className="w-30 border-1 border-(--color-gray) h-30 -translate-x-1/2" />
        <div className="h-1/2" />
        <div className="transform -translate-x-1/6">
          <Icon src="dots.svg" alt="dots" />
        </div>
        <div className='h-1/4' />
      </div>
    </aside>
  )
}
