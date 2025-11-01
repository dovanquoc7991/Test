import { Leaf } from "lucide-react";

interface InvitationProps {
  names: {
    groom: string;
    bride: string;
  };
}

const Invitation = ({ names }: InvitationProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="border-2 border-gray-300 rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Họa tiết góc */}
          <Leaf
            className="absolute top-4 left-4 text-gray-300"
            size={32}
            strokeWidth={1}
          />
          <Leaf
            className="absolute top-4 right-4 text-gray-300 -scale-x-100"
            size={32}
            strokeWidth={1}
          />
          <Leaf
            className="absolute bottom-4 left-4 text-gray-300 -scale-y-100"
            size={32}
            strokeWidth={1}
          />
          <Leaf
            className="absolute bottom-4 right-4 text-gray-300 -scale-x-100 -scale-y-100"
            size={32}
            strokeWidth={1}
          />

          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
            Trân trọng kính mời
          </h2>

          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-600">
            Đến dự buổi tiệc chung vui cùng gia đình chúng tôi trong ngày cưới
            của hai con:
          </p>

          {/* Tên cô dâu chú rể */}
          <div
            className="
              font-serif my-8 text-pink-500 font-bold 
              flex flex-col sm:flex-row sm:justify-center sm:items-center
              text-[clamp(2rem,6vw,3.5rem)] leading-tight
            "
          >
            <span className="block sm:inline">{names.groom}</span>
            <span className="hidden sm:inline mx-2">&amp;</span>
            <span className="block sm:hidden text-2xl my-1">&amp;</span>
            <span className="block sm:inline">{names.bride}</span>
          </div>

          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-600">
            Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
