type ResultBarProps = {
  id: string;
  name: string;
  result: number;
  currency: string;
};

export const ResultBar = ({ id, name, result, currency }: ResultBarProps) => {
  return (
    <div id={id} className="border w-[340px] h-[100px] rounded-[10px] p-2">
      <div className="flex items-center justify-start w-full h-full ">
        <h1 className="text-3xl text-[white] ml-4">{name}:</h1>
        <h2 className="text-3xl text-[white] ml-2">
          {result} <span>{currency}</span>
        </h2>
      </div>
    </div>
  );
};
