import fingerprint from '../../assets/images/fingerprint.png';

const FingerprintLogin = () => {
    return (
        <button
            type="button"
            className="mt-12 flex items-center justify-center"
            aria-label="Fingerprint login"
        >
            <img src={fingerprint} alt="fingerprint" className="mt-6 text-[#00E58F] text-4xl font-bold w-[65px] h-[65px]" />
        </button>
    );
};

export default FingerprintLogin;