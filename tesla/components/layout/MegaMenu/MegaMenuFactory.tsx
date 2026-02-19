import ChargingMega from "./charging/ChargingMega";
import DiscoverMega from "./discover/DiscoverMega";
import EnergyMega from "./energy/EnergyMega";
import ShopMega from "./shop/ShopMega";
import VehiclesMega from "./vehicles/VehiclesMega";


type MegaMenuProps = {
    type: string;
};

export default function MegaMenuFactory({ type }: MegaMenuProps) {
    switch (type) {
        case "vehicles":
            return <VehiclesMega />;
        case "energy":
            return <EnergyMega />;
        case "charging":
            return <ChargingMega />;
        case "discover":
            return <DiscoverMega />;
        case "shop":
            return <ShopMega />;
        default:
            return null;
    }
}
