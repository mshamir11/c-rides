export default function ResultSummaryComponent() {
  return (
    <div className="main h-screen w-screen  md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:bg-purple-200 md:w-[740px]">
        <div className="flex h-[350px] bg-green-300 md:flex-row md:w-[370px]">
          <div className="flex flex-col justify-evenly items-center bg-red-200 p-10 rounded-b-[30px] md:rounded-[30px] md:h-full">
            <div className="bg-red-200">Your Result</div>
            <div className="flex flex-col justify-center items-center h-[140px] w-[140px] rounded-full bg-yellow-200">
              <h1>76</h1>
              <p className="text-center">of 100</p>{" "}
            </div>
            <div className="flex flex-col items-center justify-center bg-purple-200">
              <h1>Great</h1>
              <p className="text-center">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-10 h-[450px] bg-orange-300 md:w-[370px]">
          <h1>Summary</h1>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="">Reaction</div>
            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="">Memory</div>
            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="">Verbal</div>
            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="">Visual</div>
            <div className="">80 / 100</div>
          </div>
          <button className="bg-yellow-100 h-[55px] rounded-[30px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
