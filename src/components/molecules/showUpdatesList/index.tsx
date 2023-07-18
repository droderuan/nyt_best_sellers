import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

interface ListUpdatesProps {
  listName: string;
  newBooks: { title: string }[];
  outBooks: { title: string }[];
}

const ListUpdates: React.FC<ListUpdatesProps> = ({
  listName,
  newBooks,
  outBooks,
}) => {
  return (
    <div className={"w-full my-2"}>
      <h3 className="text-xl font-bold">{listName}</h3>
      <div className="flex justify-between max-w-3/4 gap-2">
        <div className="flex-1 ">
          <p className="font-thin">New books</p>
          {newBooks.map((book) => (
            <div key={book.title} className="flex">
              <div>
                <AiFillPlusSquare className="inline mr-2 animate-pulse text-green-500 text-xl" />
              </div>
              <p>{book.title}</p>
            </div>
          ))}
        </div>
        <div className="w-[2px] bg-slate-300 rounded" />
        <div className="flex-1 ">
          <p className="font-thin">Went out</p>
          {outBooks.map((book) => (
            <div key={book.title} className="flex">
              <div>
                <AiFillMinusSquare className="inline mr-2 animate-pulse text-red-500 text-xl" />
              </div>
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListUpdates;
