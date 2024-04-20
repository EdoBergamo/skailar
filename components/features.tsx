import { ClockIcon } from "@radix-ui/react-icons";
import { BiChip, BiMouse, BiSupport } from "react-icons/bi";
import { FaEye, FaRobot } from "react-icons/fa";
import { MdEmail, MdOutlineSecurity } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

export const Features = () => {
  const data = [
    { id: 1, icon: ClockIcon, title: 'Instant Delivery', description: 'We guarantee instant product delivery once payment is processed.' },
    { id: 2, icon: BiMouse, title: 'Intuitive GUI', description: 'Our intuitive GUI offers extensive customization through a unique, non-ImGUI based framework.' },
    { id: 3, icon: BiChip, title: 'HWID Spoofer', description: 'All our products include a Battleye HWID spoofer, allowing you to play any Battleye game even if you\'re already HWID banned.' },
    { id: 4, icon: FaEye, title: 'Transparency', description: 'Our status page lists all products, with automated statuses linked to our client. It also indicates when we last updated each cheat feature.' },
    { id: 5, icon: RxUpdate, title: 'Security Updates', description: 'Stay ahead of the game with instant updates. Our cheats adapt swiftly to game patches, ensuring uninterrupted gameplay.' },
    { id: 6, icon: BiSupport, title: 'Customer Support', description: 'Access a dedicated support channel, ensuring your questions and concerns are promptly addressed, offering a premium support experience.' }
  ];
  
  return (
    <section className="mt-28 flex flex-col justify-center">
      <h2 className="text-center text-white font-medium text-5xl">
        Features
      </h2>

      <div className="w-full flex justify-center items-center text-center">
        <p className="text-base text-center max-w-full mx-4 xl:mx-0 xl:max-w-lg mt-5 font-medium text-zinc-500">
          Every Skailar product is packed with awesome features.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map(item =>
            <div key={item.id} className="w-[390px] bg-[#0D0D0D] rounded-xl p-4 sm:p-6">
              <div className="bg-[#1B1B1B]  w-6 h-6 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-white text-xs">
                {<item.icon className="h-6 w-6 text-red-500" />}
              </div>

              <div className="mt-8">
                <h3 className="text-gray-100 font-medium text-base">{item.title}</h3>
                <p className="mt-2 text-zinc-500 font-medium">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}