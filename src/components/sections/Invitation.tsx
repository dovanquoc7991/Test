interface InvitationProps {
    names: {
      groom: string;
      bride: string;
    };
  }
  
  const Invitation = ({ names }: InvitationProps) => {
    return (
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-6">Trân trọng kính mời</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Đến dự buổi tiệc chung vui cùng gia đình chúng tôi trong ngày cưới của hai con:
        </p>
        <p className="text-3xl font-serif my-4">{names.bride} &amp; {names.groom}</p>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi!
        </p>
      </section>
    );
  };
  
  export default Invitation;

