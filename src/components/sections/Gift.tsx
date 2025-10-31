import qrGroom from '../../assets/images/bankAccounts/bankAcount1.png';
import qrBride from '../../assets/images/bankAccounts/bankAcount1.png';

const Gift = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-2xl">
                <h2 className="text-4xl font-serif text-gray-800 mb-6">Mừng Cưới</h2>
                <p className="mb-8">
                    Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn gửi quà mừng,
                    có thể gửi qua thông tin dưới đây.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h3 className="text-2xl font-serif mb-2">Nhà trai</h3>
                        <img src={qrGroom} alt="Mã QR nhà trai" className="mx-auto my-4 w-48 h-48 object-contain" />
                        <p>Tên: Đỗ Văn Cường</p>
                        <p>STK: 9964391506</p>
                        <p>Ngân hàng: Vietcombank</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h3 className="text-2xl font-serif mb-2">Nhà gái</h3>
                        <img src={qrBride} alt="Mã QR nhà gái" className="mx-auto my-4 w-48 h-48 object-contain" />
                        <p>Tên: Diễm My</p>
                        <p>STK: 9964391506</p>
                        <p>Ngân hàng: Vietcombank</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gift;