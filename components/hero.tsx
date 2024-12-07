import Home from "./home";
import AllView from "./allview";
import TrustedAgents from "./trusted-agents";
import DiscoverMarket from "./descover-market";
import RealEstate from "./realstates";

export default function Header() {
  return (
    <>
     <Home />
     <TrustedAgents />  
     <DiscoverMarket />
     <AllView />
     <RealEstate />
    </>
  );
}
