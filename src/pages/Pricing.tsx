import Cloud from "../Component/tabs/Cloud";
import DataCenter from "../Component/tabs/DataCenter";
import Tab from "../Component/tabs/Tab";
import Tabs from "../Component/tabs/Tabs";

const Pricing: React.FC = () => {
  return (
    <div className=" w-full">
      <Tabs>
        <Tab title="Cloud">
          <Cloud />
        </Tab>
        <Tab title="DataCenter">
          <DataCenter />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Pricing;
