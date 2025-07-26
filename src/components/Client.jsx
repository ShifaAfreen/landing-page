import Marquee from "react-fast-marquee";

const Client = () => {
    const clientsImg = [
  {
    id: 1,
    name: "client1",
    image: "/clients/client1.png",
  },
  {
    id: 2,
    name: "client2",
    image: "/clients/client2.png",
  },
  {
    id: 3,
    name: "client3",
    image: "/clients/client3.png",
  },
  {
    id: 4,
    name: "client4",
    image: "/clients/client4.png",
  },
  {
    id: 5,
    name: "client5",
    image: "/clients/client5.png",
  },
  {
    id: 6,
    name: "client6",
    image: "/clients/client6.png",
  },
  
];

  return (
    <section >
      <div className="flex flex-col gap-6 mx-auto items-center max-w-5xl p-6 md:pb-12 ">
     
        <Marquee
          speed={30}
          autoFill={true}
          gradient={false}
        >
          {clientsImg.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-md w-20 h-12 sm:w-30 sm:h-18  mx-2 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-w-[85%] max-h-[80%] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Client