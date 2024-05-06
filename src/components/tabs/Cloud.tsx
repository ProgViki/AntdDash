import React, { useState } from "react";
import { CheckOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Modal, Radio, RadioChangeEvent, Table } from "antd";
import type { TableProps } from "antd";
import CloudPix from "../../assets/cloud.jpg";
import AdminPix from "../../assets/admin-lock.jpg";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}
interface ModalProps {
  open?: boolean | undefined
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Feature",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Basic",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Standard",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Advance",
    dataIndex: "address",
    key: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "User limit per site",
    age: 1000,
    address: "1000 users",
  },
  {
    key: "2",
    name: "Number of sites",
    age: 2000,
    address: "1000 users",
  },
  {
    key: "3",
    name: "Automation",
    age: 3,
    address: "5000 users",
  },
  {
    key: "4",
    name: "Planning",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Dependency management",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Atlassian Intelligence",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "Unlimited intelligence",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Unlimited Project boards",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "11",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "13",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "15",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "16",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "17",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const dataa: DataType[] = [
  {
    key: "21",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "22",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "23",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "24",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "25",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "26",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "27",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "28",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "29",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "30",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "31",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "32",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "33",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "34",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "35",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "36",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "37",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const datar: DataType[] = [
  {
    key: "71",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "72",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "73",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "74",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "75",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "81",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "82",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "83",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "84",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "85",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const datars: DataType[] = [
  {
    key: "51",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "52",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "53",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "54",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "55",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "56",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];


const Cloud: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRecord, setActiveRecord] = useState(null);

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const [value, setValue] = useState<number>(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(Number(e.target.value));
  };

  return (
    <div className="w-full h-full m-0  ">
      <h1 className="text-center mt-5 h-[100px] text-black font-bold font-sans text-lg md:text-4xl pt-5 ">
        Compare plans and pricing
      </h1>
      <div className="w-full flex flex-col justify-center items-center bg-transparent">
        <div className="w-[90%] md:w-[95%] h-auto mx-auto bg-gray-100 bg-opacity-70 mt-2 rounded-md">
          <div className="md:flex justify-normal gap-16  md:ml-10 pt-5 md:pl-20 ml-5 pl-10">
            <p className="text-sm md:text-xl mt-2">
              How many users are on your team?
            </p>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                className="w-[140px] h-8 border-1 border-blue-300  rounded-sm p-1 font-bold text-xl"
                placeholder="1"
              />
              <span className=" ">
                <QuestionCircleOutlined className=" p-1 rounded-md text-xl " />
              </span>
            </div>
          </div>
          <div className="md:flex justify-around gap-10 md:ml-10 pt-5 md:pl-20 ml-5 pl-10">
            <p className="text-sm md:text-xl mt-5">
              How often would you like to be billed?
            </p>
            <Radio.Group
              onChange={onChange}
              value={value}
              className="flex gap-10 mt-5 md:mb-10 text-4xl "
            >
              <Radio value={1}>Monthly</Radio>
              <Radio value={2}>Annually</Radio>
            </Radio.Group>
            <div className=" mx-auto mt-5 py-5  ">
              <p className="text-blue-700 text-md md:text-lg hover:underline ml-10 md:pb-2 ">
                <a href="#">See pricing example</a>
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full px-4 mx-auto md:flex-row flex flex-col items-center justify-center mt-5 pb-5 rounded-l-md">
          <div className="max-w-[400px] max-h-[600px] w-full flex flex-col gap-8 border border-black rounded-l-md mb-4 pb-4">
            <div className="flex flex-col items-center justify-around gap-6">
              <p className="w-full text-center h-20 font-bold text-xl md:text-4xl text-black bg-gray-100 bg-opacity-70 pt-4">
                Basic
              </p>
              <p className="text-4xl md:text-6xl font-bold ">$8.15</p>
              <p>
                per user(estimated) <br />{" "}
                <span className="font-extrabold">$8.15 per month</span>
              </p>
              <button
                type="button"
                className="md:w-[30%] md:h-12 mx-auto border-2 border-blue-200 bg-white hover:bg-gray-200 text-blue-400 py-2 px-4 rounded text-sm md:text-md"
              >
                {" "}
                Start Trial
              </button>
            </div>
            <div className="h-auto flex flex-col justify-around md:text-lg pl-5 border border-gray-100 border-t-2 ">
              <p className="font-bold">
                <span>Everything from Free plus:</span>
              </p>
              <p className="">
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <a href="#">Up to 35,000 users</a>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Users roles & permissions</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Audit logs</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Data residency</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>250 GB of storage</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Business hour support</span>
              </p>
            </div>
          </div>
          <div className="max-w-[400px] max-h-[600px] w-full flex flex-col gap-8 border border-black mb-4 pb-4">
            <div className="flex flex-col items-center justify-around gap-6">
              <p className="w-full text-center h-20 font-bold text-xl md:text-4xl text-black bg-gray-100 bg-opacity-70 pt-4">
                Standard
              </p>
              <p className="text-4xl md:text-6xl font-bold ">$8.15</p>
              <p>
                per user(estimated) <br />{" "}
                <span className="font-extrabold">$8.15 per month</span>
              </p>
              <button
                type="button"
                className="md:w-[30%] md:h-12 mx-auto border-2 border-blue-200 bg-white hover:bg-gray-200 text-blue-400 py-2 px-4 rounded text-sm md:text-md"
              >
                {" "}
                Start Trial
              </button>
            </div>
            <div className=" flex flex-col justify-around pl-5  md:text-lg  border border-gray-100 border-t-2">
              <p className="font-bold">
                <span>Everything from Free plus:</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Atlassian Intelligence (AI)</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Advanced planning</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Custom issue hierarchy</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Sandbox & release tracks</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Unlimited storage</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>24/7 Premium support</span>
              </p>
            </div>
          </div>
          <div className="max-w-[400px] max-h-[600px] w-full flex flex-col gap-8 border border-black rounded-r-md mb-4 pb-4">
            <div className="flex flex-col items-center justify-around gap-6">
              <p className="w-full text-center h-20 font-bold text-xl md:text-4xl text-black bg-gray-100 bg-opacity-70 pt-4">
                Advance
              </p>
              <p className="text-4xl md:text-6xl font-bold ">$8.15</p>
              <p>
                per user(estimated) <br />{" "}
                <span className="font-extrabold">$8.15 per month</span>
              </p>
              <button
                type="button"
                className="md:w-[30%] md:h-12 mx-auto border-2 border-blue-200 bg-white hover:bg-gray-200 text-blue-400 py-2 px-4 rounded text-sm md:text-md"
              >
                {" "}
                Start Trial
              </button>
            </div>
            <div className=" flex flex-col justify-around pl-5 md:text-lg  border border-gray-100 border-t-2">
              <p className="font-bold">
                <span>Everything from Free plus:</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Atlassian Intelligence (AI)</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Multiple sites, up to 150</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Centralized security controls</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Centralized user subscriptions </span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>24/7 Enterprise support</span>
              </p>
              <p>
                <span>
                  <CheckOutlined className="text-green-800 mr-3" />
                </span>
                <span>Constant technical consulting</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[180px] md:h-[200px] w-[80%] lg:w-[63%] mx-auto bg-blue-300 mt-6 flex flex-col gap-8 text-center rounded-md  border border-gray-100">
          <p className="text-center md:text-xl font-serif italic pt-10">
            Let's tell you about another interesting aspect you need to know{" "}
          </p>
          <p className="md:text-2xl text-center font-bold font-sans">
            Have you heard about Fortrex
          </p>
        </div>
        <div className="h-auto max-w-full w-[80%]">
          <p className="text-center font-serif font-bold mt-20 text-2xl">
            Compare features
          </p>
          <p className="mt-20 ml-10 text-xl">Features</p>
          <div className="table w-[90%] mx-auto mt-10 overflow-hidden  ">
            <Table
              columns={columns}
              dataSource={data}
              className="customTable border border-gray-300 lg:w-[88%] mx-auto"
              style={{}}
              onRow={(record) => {
                return {
                  onDoubleClick: () => {
                    setActiveRecord(record);
                    setIsModalVisible(true);
                  },
                }}}
            />
            <Modal 
            title="User info"
            open={isModalVisible}
            onCancel={closeModal}
            footer={null}
          >
            {/* render whatever you want based on your record */}
            <p>{activeRecord?.name} </p>
          </Modal>
          </div>

          <div className="w-[90%] mx-auto mt-10">
            <Table
              columns={columns}
              dataSource={dataa}
              className="customTable border border-gray-300 lg:w-[88%] mx-auto"
             
            />
          </div>
          <div className="w-[90%] mx-auto mt-10">
            <Table
              columns={columns}
              dataSource={datar}
              className="customTable border border-gray-300 lg:w-[88%] mx-auto"
            />
          </div>
          <div className="w-[90%] mx-auto mt-10">
            <Table
              columns={columns}
              dataSource={datars}
              className="customTable border border-gray-300 lg:w-[88%] mx-auto"
            />
          </div>
          <div className="mt-5 h-[600px] rounded-md w-screen md:w-[95%] mx-auto">
            <div className="md:h-[200px] flex flex-col justify-center items-center px-5 md:flex-row text-[14px] md:text-lg mx-4 pt-4 gap-16 bg-gray-300">
              <img
                src={CloudPix}
                alt="cloud"
                className="w-18 h-16 rounded-full mt-8"
              />
              <div className="pb-5 ">
                <p>Benefits of hosting in the cloud</p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>
                    Get immediate access to our latest features with automatic
                    upgrades{" "}
                  </span>
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>
                    No servers, no storage, no maintenance - we host your site
                    for you
                  </span>
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>
                    Bring every team to Jira Work Management is included at no
                    additional cost
                  </span>
                </p>
              </div>
            </div>
            <div className="md:h-[200px] flex flex-col justify-center items-center px-5 md:flex-row text-[14px] md:text-lg mx-4 pt-4 gap-16 bg-gray-400">
              <img
                src={AdminPix}
                alt="admin"
                className="w-18 h-16 rounded-full mt-8"
              />
              <div className="pb-5 ">
                <p>
                  Enterprise-grade security and centralized administration with
                  Atlassian Access{" "}
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>SAML single sign-on</span>
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>User provisioning and deprovisioning</span>
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>Real-time Active Directory sync</span>
                </p>
                <p>
                  {" "}
                  <CheckOutlined className=" mr-3" />
                  <span>Organization audit log</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
