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
        <div className="border-2 border-gray-300 rounded-lg p-8 md:p-12 relative">
          {/* Họa tiết góc */}
          <Leaf className="absolute top-4 left-4 text-gray-300" size={32} strokeWidth={1} />
          <Leaf className="absolute top-4 right-4 text-gray-300 -scale-x-100" size={32} strokeWidth={1} />
          <Leaf className="absolute bottom-4 left-4 text-gray-300 -scale-y-100" size={32} strokeWidth={1} />
          <Leaf className="absolute bottom-4 right-4 text-gray-300 -scale-x-100 -scale-y-100" size={32} strokeWidth={1} />

          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
            Trân trọng kính mời
          </h2>

          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-600">
            Đến dự buổi tiệc chung vui cùng gia đình chúng tôi trong ngày cưới của hai con:
          </p>

          {/* Tên cô dâu chú rể */}
          <p
            className="font-serif my-6 text-pink-500 font-bold"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              whiteSpace: 'nowrap',
            }}
          >
            {names.groom} &amp; {names.bride}
          </p>

          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-600">
            Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
