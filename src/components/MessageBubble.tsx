import Image from "next/image"

type MessageBubbleProps = {
    recived: boolean
}


export default function MessageBubble({recived = true}: MessageBubbleProps) {
  return (
    <>
    {recived ? (
        <div id='userCard' className="flex m-5 relative">
            <section className="flex">
                <div id="userStatus" className="rounded-l-full absolute z-10">
                    <Image className="rounded-full w-20 h-20" width={100} height={100} src='/dinos.jpg' alt="coso" />
                </div>
                <div className="flex flex-col justify-center py-5 pl-16 pr-5 ml-10 bg-gray-bubble top-0 left-10 min-h-[5rem] rounded-xl max-w-[550px]">
                    <p className="">Te estamos esperandos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste a, vel facere qui reiciendis error et fuga repellat iure, id laboriosam officia maxime accusamus vero officiis inventore saepe dolore.</p>
                </div>
            </section>
        </div>
    ): <div id='userCard' className="flex m-5 relative justify-end">
    <section className="flex justify-end">
        <div id="userStatus" className="rounded-l-full absolute z-10">
            <Image className="rounded-full w-20 h-20" width={100} height={100} src='/dinos.jpg' alt="coso" />
        </div>
        <div className="flex flex-col justify-center py-5 pr-16 pl-5 mr-10 bg-light-blue top-0 left-10 min-h-[5rem] rounded-xl max-w-[550px]">
            <p className="">Estoy llegando, Te estamos esperandos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste a, vel facere qui reiciendis error et fuga repellat iure, id laboriosam officia maxime accusamus vero officiis inventore saepe dolore.</p>
        </div>
    </section>
</div>}
    </>
  )
}
