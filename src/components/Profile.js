import React from "react";

const Profile = (props) => {
  const { data } = props;
  return (
    <section>
      <div className="bg-primary dark:bg-black pb-12">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-10">
            {data.profile.profile}
          </h2>
          <div className="flex justify-between mb-12">
            <div>
              <div className="text-homeName font-medium text-3xl mb-5">
                {data.profile.profile}
              </div>
              <div>
                <table className="table-auto text-left">
                  <tr>
                    <th className="t-element t-header">{data.profile.dob}</th>
                    <td className="t-element">1995</td>
                  </tr>
                  <tr>
                    <th className="t-elemen t-header">
                      {data.profile.location}
                    </th>
                    <td className="t-element">{data.profile.locationAns}</td>
                  </tr>
                  <tr>
                    <th className="t-element t-header">
                      {data.profile.education}
                    </th>
                    <td className="t-element">{data.profile.educationAns}</td>
                  </tr>
                  <tr>
                    <th className="t-element t-header">
                      {data.profile.preferredRole}
                    </th>
                    <td className="t-element">
                      {data.profile.preferredRoleAns}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <div className="text-homeName font-medium text-3xl mb-5">
                {data.profile.aboutMe}
              </div>
              <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <p class="text-sm md:text-base lg:text-lg">
                  {data.profile.description}
                </p>
              </div>
            </div>
          </div>
          <hr className="w-full h-px bg-hrColor border-none" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
