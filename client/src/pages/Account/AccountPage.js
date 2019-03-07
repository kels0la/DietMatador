import React from "react";
import { B } from '../../components/Widgets';


const AccountPage = props => {

  const { handlePassReset, email } = props
  console.log(props)

  return (
    <div className='absolute w-full mt-5'>
      <div className='container w-full flex mx-auto'>
        <div className='w-full px-1 xs:w-full sm:w-full md:w-full lg:w-2/3 xl:w-23'>
          <div className='mx-0 mb-2 p-4 rounded-lg bg-darkest-gray'>
            <div className='mb-3'>
              <div className='text-3xl font-header'>{props.userName}</div>
            </div>
            <hr className="border-brand-green border hrModals mb-2"></hr>
            <B btnType={'primary'} onClick={(e) => handlePassReset(e, email)}>Password Reset</B><span className='mr-1' />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AccountPage;