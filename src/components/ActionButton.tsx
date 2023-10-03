import Image from 'next/image'

export default function ActionButton({
  bgColor,
  iconPath,
  hidde = false
}: {
  bgColor: string
  iconPath: string
  hidde?: Boolean
}) {
  return (
    <button
      className={`${bgColor} w-10 h-10 flex justify-center items-center rounded-full cursor-pointer ${
        hidde ? 'hidden' : 'block'
      }`}
    >
      <Image width={25} height={25} src={iconPath} alt="micro" />
    </button>
  )
}
