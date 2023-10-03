import Image from 'next/image'

type EditSidebarProps = {
  showSidebar: boolean
  setShowSidebar: Function
}

export default function EditSidebar({
  showSidebar,
  setShowSidebar
}: EditSidebarProps) {
  return (
    <div
      id="leftPanelMenu"
      className={`px-5 absolute border-r-2 z-10 min-w-[350px] sm:w-full sm:z-50 border-gray-border rounded-bl-lg bg-white h-full ease-in-out duration-300 ${
        showSidebar ? 'left-0' : '-left-full'
      }`}
    >
      <div className="flex justify-end mt-5">
        <button onClick={() => setShowSidebar(false)}>
          <Image width={20} height={20} src={'/close.svg'} alt="Close" />
        </button>
      </div>
      <div className="flex relative justify-center">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={'/female.png'}
          alt="Profile photo"
        />
        <div className="absolute rounded-full hover:bg-transparent-gray hover:bg-[url('/cam.svg')] bg-no-repeat bg-center cursor-pointer w-[150px] h-[150px]"></div>
      </div>
      <form className="flex flex-col gap-6 mt-10">
        <div className="relative flex h-11 w-full min-w-[200px]">
          <input
            className="peer h-full w-full border-b border-gray-light bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-gray-border placeholder-shown:border-b-2 focus:border-gray-border focus:outline-0 disabled:border-0 disabled:bg-gray"
            placeholder=" "
          />
          <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray peer-focus:after:scale-x-100 peer-focus:after:border-gray peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray">
            Tu nombre
          </label>
          <Image
            className="ml-3"
            height={12}
            width={12}
            src={'/edit.svg'}
            alt="Edit"
          />
        </div>
        <div className="relative flex h-11 w-full min-w-[200px]">
          <input
            className="peer h-full w-full border-b border-gray-light bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-gray-border placeholder-shown:border-b-2 focus:border-gray-border focus:outline-0 disabled:border-0 disabled:bg-gray"
            placeholder=" "
          />
          <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray peer-focus:after:scale-x-100 peer-focus:after:border-gray peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray">
            Info.
          </label>
          <Image
            className="ml-3"
            height={12}
            width={12}
            src={'/edit.svg'}
            alt="Edit"
          />
        </div>
      </form>
    </div>
  )
}
