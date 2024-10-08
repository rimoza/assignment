import { Suspense } from 'react'
import ProfileCarousel from './ProfileCarousel'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
      <div>
        <h1 className='text-5xl font-extrabold leading-relaxed mb-4 fade-in'>
          최고의 실력을 가진 <br />
          외국인 인재를 찾고 계신가요?
        </h1>
        <p className='mb-8 text-2xl font-extrabold leading-relaxed fade-in delay-200'>
          법률 및 인사관리 부담없이 <br />
          1주일 이내에 원격으로 채용해보세요.
        </p>
        <p className='my-8 text-xl font-extrabold fade-in-up'>
          개발자가 필요하신가요?
        </p>
        <div className='grid grid-cols-3 gap-4 mb-8 fade-in delay-400'>
          <div className='border-t-2'>
            <h2 className='text-xl font-extrabold leading-relaxed'>
              평균 월 120만원
            </h2>
            <p className='leading-normal'>
              임금을 해당 국가를 기준으로 계산합니다.
            </p>
          </div>
          <div className='border-t-2'>
            <h2 className='text-xl font-extrabold leading-relaxed'>
              최대 3회 인력교체
            </h2>
            <p className='leading-normal'>
              막상 채용해보니 맞지 않아도 걱정하지 마세요.{' '}
            </p>
          </div>
          <div className='border-t-2'>
            <h2 className='text-xl font-extrabold leading-relaxed'>
              평균 3일, 최대 10일
            </h2>
            <p className='leading-normal'>
              급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
      <Suspense fallback={<div>Loading profiles...</div>}>
        <div className='fade-in delay-600'>
          <ProfileCarousel />
        </div>
      </Suspense>
      </div>
    </div>
  )
}

export default Hero
