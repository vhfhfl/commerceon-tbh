import {Fragment} from "react";

function PageAos() {
    return (
        <div className={`PageAos`}>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
            <div className={`h-[200px] bg-[red]`} data-aos="fade-up" data-aos-offset="0" data-aos-delay={200}>
                PageAos
            </div>
            <div className={`h-[200px] bg-[yellow]`} data-aos="fade-up" data-aos-offset="0" data-aos-anchor-placement="top-center">
                PageAos 2
            </div>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
            <div className={`aspect-video bg-[#ffffd4] w-[100%] flex flex-row items-center justify-center`}>
                DUMMY BOX
            </div>
        </div>
    );
}

export default PageAos;