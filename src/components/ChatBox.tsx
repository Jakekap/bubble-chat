import MessageBubble from './MessageBubble'

export default function ChatBox() {
  return (
    <div className="sm:h-[calc(100%-145px)] sm:mt-[66px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar-track-white">
      <MessageBubble recived />
      <MessageBubble recived={false} />
      <MessageBubble recived={false} />
      <MessageBubble recived={false} />
      <MessageBubble recived />
      <MessageBubble recived />
      <MessageBubble recived />
      <MessageBubble recived />
    </div>
  )
}
