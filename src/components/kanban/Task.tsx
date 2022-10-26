export default function Task({ task }) {
  return (
    <div className=" m-1 rounded p-2 duration-200 ease-in-out hover:opacity-70 hover:dark:bg-gray-500">
      <div className="flex justify-between">
        <div className="text-lg">{task.content}</div>
        <div className="text-rose-600">11/01/22</div>
      </div>
      <hr className="mt-2 mb-2 border-gray-500"></hr>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </div>
    </div>
  );
}
