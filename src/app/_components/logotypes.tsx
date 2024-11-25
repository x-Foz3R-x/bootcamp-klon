import Amazon from "~/svg/amazon";
import Dribble from "~/svg/dribble";
import Hubspot from "~/svg/hubspot";
import Netflix from "~/svg/netflix";
import Notion from "~/svg/notion";
import Zoom from "~/svg/zoom";

export default function Logotypes() {
  return (
    <div className="flex justify-between">
      <Amazon className="h-12" />
      <Dribble className="h-12" />
      <Hubspot className="h-12" />
      <Notion className="h-12" />
      <Netflix className="h-12" />
      <Zoom className="h-12" />
    </div>
  );
}
