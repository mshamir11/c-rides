import { IRide } from "@/app/lib/actions";

type TableProps = {
  rides: IRide[];
  onSubmit: (rideId: string) => void;
  joinRide?: boolean;
  cancelRide?: boolean;
};

export const Table: React.FC<TableProps> = ({
  rides,
  onSubmit,
  joinRide = false,
  cancelRide = false,
}) => {
  return (
    <div>
      <br />
      <hr />
      <div>
        <h1 className="font-bold text-2xl my-4">
          {(joinRide && "Rides available around you") ||
            (cancelRide && "My Rides")}
        </h1>

        <div className="flex justify-center">
          <table className="table-fixed w-full text-center border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300">Ride Number</th>
                <th className="border border-slate-300">Ride Name</th>
                <th className="border border-slate-300">
                  Destination Location
                </th>
                <th className="border border-slate-300">Trip Duration</th>
                <th className="border border-slate-300"></th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride, index) => (
                <tr key={index} className="border border-slate-300">
                  <td className="border border-slate-300">{index + 1}</td>
                  <td className="border border-slate-300"> {ride.rideName}</td>
                  <td className="border border-slate-300">
                    {ride.destinationLocation}
                  </td>
                  <td className="border border-slate-300">
                    {ride.tripDuration}
                  </td>
                  <td>
                    <button
                      className="w-36 h-10 border-2 border-black justify-center items-center rounded-md bg-slate-200 my-2"
                      onClick={() => onSubmit(ride.id)}
                    >
                      {(joinRide && "Join this ride") ||
                        (cancelRide && "Drop this Ride")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};
