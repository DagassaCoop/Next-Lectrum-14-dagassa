import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return (
        <div className="max-auto md:px-6 py-[50px]">
            <section className="md-32">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto">
                        <h2 className="mb-6 text-3xl font-bold">Our Team</h2>
                        <p className="text-sm font-roboto text-gray-600 text-left my-4 leading-6">
                            Meet the professionals who are passionate about delivering the best solutions to our clients.
                            Our team consists of experienced developers, designers, and project managers who are dedicated to achieving great results.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-5">
                    <div className="mb-10 w-full text-center">
                        <Image src="/images/avatar.jpg" alt="Team Member 1" width={100} height={100} className="rounded-full mx-auto w-32 h-32 mb-4" />
                        <h3 className="text-xl font-semibold mb-2"><Link href={'/teacher/about'}>John Doe</Link></h3>
                        <p className="text-gray-600 mb-2">Lead Developer</p>
                        <p className="text-gray-500 text-sm mb-2">John is a full-stack developer with over 10 years of experience in building scalable web applications.</p>
                        <h4><Link href={'/teacher/about'}>Go To Profile</Link></h4>
                    </div>
                    <div className="mb-10 w-full text-center">
                        <Image src="/images/avatar.jpg" alt="Team Member 2" width={100} height={100} className="rounded-full mx-auto w-32 h-32 mb-4" />
                        <h3 className="text-xl font-semibold mb-2"><Link href={'#'}>Jessica Smith</Link></h3>
                        <p className="text-gray-600 mb-2">UI/UX Designer</p>
                        <p className="text-gray-500 text-sm mb-2">Jessica specializes in creating user-friendly interfaces and is passionate about enhancing user experiences.</p>
                        <h4><Link href={'#'}>Go To Profile</Link></h4>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
