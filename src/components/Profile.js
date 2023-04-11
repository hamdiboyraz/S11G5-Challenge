import React from "react";

const Profile = () => {
  return (
    <section>
      <div className="bg-primary dark:bg-black pb-32">
        <div className="w-2/3 mx-auto">
          <h2 className="font-semibold text-5xl mb-10">Profile</h2>
          <div className="flex justify-between mb-12">
            <div>
              <div className="text-homeName font-medium text-3xl mb-5">
                Profile
              </div>
              <div>
                <table class="table-auto text-left">
                  <tr>
                    <th class="t-element t-header">Doğum Tarihi</th>
                    <td class="t-element">1995</td>
                  </tr>
                  <tr>
                    <th class="t-elemen t-header">İkamet Şehri</th>
                    <td class="t-element">Ankara</td>
                  </tr>
                  <tr>
                    <th class="t-element t-header">Eğitim Durumu</th>
                    <td class="t-element">YTÜ İnşaat Mühendisi, 2018</td>
                  </tr>
                  <tr>
                    <th class="t-element t-header">Tercih Ettiği Rol</th>
                    <td class="t-element">Full-Stack Developer</td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <div className="text-homeName font-medium text-3xl mb-5">
                About Me
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae porro totam praesentium corrupti expedita a iure
                  officia perferendis, mollitia similique quae fuga libero
                  doloribus soluta architecto quaerat ut aspernatur fugit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt in, rerum, soluta deserunt quod vero suscipit,
                  provident voluptas explicabo totam ipsa nemo? Ullam, iste
                  corporis. Consequatur molestias sequi illo officia.
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
