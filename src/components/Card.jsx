export default function Card(props) {
  return (
    <div
      className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md"
      key={props.item.name}
    >
      <img className="w-12 py-4 flex flex-1" src={props.item.url} alt={props.item.name} />
      <p className="text-white text-center font-regular w-[60%] leading-5">
        {props.item.name}
      </p>
    </div>
  )
}
