const SDCGoalsSection = () => {
    const goals = [
        {
            imageUrl: "/sdc/download.png",
            title: "Good Health and Well-being",
            description: "Ensure healthy lives and promote well-being for all at all ages.",
          },
          {
            imageUrl: "/sdc/download 9.png",
            title: "Quality Education",
            description:
              "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
          },
          {
            imageUrl: "/sdc/download 11.png",
            title: "Responsible Consumption and Production",
            description: "Ensure sustainable consumption and production patterns.",
          },
          {
            imageUrl: "/sdc/13.svg.png",
            title: "Climate Action",
            description: "Take urgent action to combat climate change and its impacts.",
          },
          {
            imageUrl: "/sdc/17.svg.png",
            title: "Partnerships for the Goals",
            description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
          },
    ]
  
    return (
      <section className="py-16 gradientbgt">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-semibold text-center mb-12 text-black">SDC Goals</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105"
              >
                <div className="mb-4 w-32 h-32 relative">
                  <img
                    src={goal.imageUrl || "/placeholder.svg"}
                    alt={goal.title}
                    className=" object-cover w-full h-full rounded-sm"
                  />
                </div>
                {/* <h3 className="text-xl font-semibold mb-2 text-gray-800">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default SDCGoalsSection
  
  