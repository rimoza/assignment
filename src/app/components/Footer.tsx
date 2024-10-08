import React from 'react'
import Image from 'next/image'
import { Code, User, Globe, Settings } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8 px-4 md:px-8'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col sm:flex-row space-x-16'>
          {/* Company Info */}
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <Image src="/logo.svg" alt="HyperHire" width={150} height={40} />
            <p className='mt-4 leading-snug text-gray-900'>
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className='mt-2 text-lg font-extrabold text-gray-500'>010-0000-0000</p>
            <p className='text-lg font-extrabold text-gray-500'>aaaaa@naver.com</p>
          </div>

          {/* Company Details */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='bg-gray-100 p-4 rounded-2xl'>
                <p className='font-semibold flex flex-col bg-red-50s mb-2'>
                  <span className='bg-gray-200 p-2 rounded-full w-10 flex justify-center items-center'>
                    <Code size={20} />
                  </span>
                  
                </p>
                <p className='font-bold mb-2'>해외 개발자 원격 채용</p>
                <p>
                바로가기
                </p>
              </div>
              <div className='bg-gray-100 p-4 rounded-2xl'>
                <p className='font-semibold flex flex-col mb-2'>
                  <span className='bg-gray-200 p-2 rounded-full w-10 flex justify-center items-center'>
                    <User size={20} />
                  </span>
                </p>
                <p className='font-bold mb-2'>외국인 원격 채용 (비개발)</p>
                <p>바로가기</p>
              </div>
              <div className='bg-gray-100 p-4 rounded-2xl'>
                <p className='font-semibold flex flex-col mb-2'>
                  <span className='bg-gray-200 p-2 rounded-full w-10 flex justify-center items-center'>
                    <Globe size={20} />
                  </span>
                </p>
                <p className='font-bold mb-2'>한국어 가능 외국인 채용</p>
                <p>바로가기</p>
              </div>
              <div className='bg-gray-100 p-4 rounded-2xl'>
                <p className='font-semibold flex flex-col mb-2'>
                  <span className='bg-gray-200 p-2 rounded-full w-10 flex justify-center items-center'>
                    <Settings size={20} />
                  </span>
                </p>
                <p className='font-bold mb-2'>해외 개발자 활용 서비스</p>
                <p>바로가기</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className='container mx-auto mt-10'>
          <div className='flex flex-col sm:flex-row sm:space-x-20'>
            <div className='flex flex-col sm:flex-row sm:space-x-2'>
              <div>
                <h2 className='font-extrabold leading-relaxed'>
                  상호명
                </h2>
                <p className='leading-normal'>하이퍼하이어</p>
                <p className='font-extrabold leading-normal text-gray-500'>Hyperhire India Private Limited</p>
              </div>
              <div>
                <h2 className='font-extrabold leading-relaxed'>
                  대표 CEO
                </h2>
                <p className='leading-normal'>김주현</p>
                <p className='font-extrabold leading-normal text-gray-500'>Juhyun Kim</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:space-x-8'>
              <div>
                <h2 className='font-extrabold leading-relaxed'>
                  사업자등록번호 CIN
                </h2>
                <p className='leading-normal'>427-86-01187</p>
                <p className='font-extrabold leading-normal text-gray-500'>U74110DL2016PTC290812</p>
              </div>
              <div>
                <h2 className='font-extrabold leading-relaxed'>
                  주소 ADDRESS
                </h2>
                <p className='leading-normal'>
                  서울특별시 강남대로 479, 지하 1층 238호{' '}
                </p>
                <p className='font-extrabold leading-normal text-gray-500'>
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-sm font-bold text-gray-500'>
          © 2023 Hyperhire
        </div>
      </div>
    </footer>
  )
}

export default Footer
