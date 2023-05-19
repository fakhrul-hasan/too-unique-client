import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ReactTabs = () => {
  const [toys, setToys] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:3000/toys/${tabIndex}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [tabIndex]);
  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Electronics</Tab>
          <Tab>Remote Control Vehicle</Tab>
          <Tab>Monster Truck</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 justify-around gap-4 pt-8">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 justify-around gap-4 pt-8">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 justify-around gap-4 pt-8">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
