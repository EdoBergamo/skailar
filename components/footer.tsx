import Image from "next/image";

export const Footer = () => {
  const data = [
    { id: 1, endpoint: '/products', name: 'Products' },
    { id: 2, endpoint: '/status', name: 'Status' },
    { id: 3, endpoint: '/contact', name: 'Contact' },
    { id: 4, endpoint: `${process.env.DISCORD_INVITE_LINK}`, target: '_blank', name: 'Discord' },
    { id: 5, endpoint: '/terms', name: 'Terms Of Service' },
  ]

  const year = new Date().getFullYear();

  return (
    <footer className="rounded-xl shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <Image
              src="/logo.png"
              alt="Skailar Logo"
              width='50'
              height='50'
              className="w-14 h-14"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Skailar</span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            {data.map(item => (
              <li key={item.id}>
                <a href={`${item.endpoint}`} target={item.target} className="hover:underline me-4 md:me-6">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          &copy;{year === 2023 ? year : `2023 - ${year}`} <a href="/" className="hover:underline">Skailar</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}