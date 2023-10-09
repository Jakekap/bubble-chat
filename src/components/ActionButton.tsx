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
      className={`${bgColor} flex w-10 h-10 justify-center items-center rounded-full cursor-pointer ${
        hidde ? 'sm:hidden' : 'flex'
      }`}
    >
      <Image width={25} height={25} src={iconPath} alt="micro" />
    </button>
  )
}
