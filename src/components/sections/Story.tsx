const storyEvents = [
    { year: "6/2024", description: "Lần đầu gặp gỡ, một ngày nắng đẹp..." },
    { year: "12/2024", description: "Chính thức hẹn hò, bắt đầu hành trình yêu." },
    { year: "3/2025", description: "Lời cầu hôn ngọt ngào dưới ánh hoàng hôn." },
    { year: "6/2025", description: "Ra mắt bố mẹ 2 bên." },
    { year: "10/2025", description: "Lễ đính hôn ấm áp." },
    { year: "12/2025", description: "Về chung một nhà, viết tiếp câu chuyện tình yêu." },
];

const Story = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-serif text-gray-800 mb-12">Câu Chuyện Tình Yêu</h2>
                <div className="relative">
                    {/* Đường timeline */}
                    <div className="absolute left-1/2 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>

                    {storyEvents.map((event, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-5/12"></div>
                            <div className="z-10 bg-gray-400 text-white rounded-full h-8 w-8 flex items-center justify-center">
                                {index + 1}
                            </div>
                            <div className="w-5/12 bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="font-bold text-xl mb-2">{event.year}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;