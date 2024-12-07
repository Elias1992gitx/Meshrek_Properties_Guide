import Home from "./home";
import AllView from "./allview";
import TrustedAgents from "./trusted-agents";
import DiscoverMarket from "./descover-market";

export default function Header() {
  return (
    <>
     <Home />
     <TrustedAgents />  
     <DiscoverMarket />
     <AllView />
    </>
  );
}
