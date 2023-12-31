import { ethers } from "ethers";
import { Address } from "~~/components/scaffold-eth";

/**
 * History Event row
 */
export const EventRow = ({ eventData }: { eventData: any }) => {
  return (
    <div className="flex flex-col gap-2 animate-fadeIn">
      <div className="flex gap-2 mb-4 items-center">
        <div className="flex flex-col">
          <span>
            You <span className="font-bold">received</span> {ethers.utils.formatEther(eventData.value || "0")}
          </span>
          <div className="flex gap-2">
            from
            <Address address={eventData.from} disableAddressLink={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
