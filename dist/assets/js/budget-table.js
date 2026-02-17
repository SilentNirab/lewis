document.addEventListener("DOMContentLoaded", () => {
  const rowItems = [1, 3, 4, 5, 2, 6, 7, 8, 9];

  const rowContainer = document.getElementById("table-body");

  rowItems.map((_, index) => {
    const row = document.createElement("tr");

    row.className = "";

    row.innerHTML = `  <tr class="hover:bg-gray-50 ">
                    <td class="px-6 py-4">
                      <div
                      style="border-radius: var(--multi-valure-2xl, 56px);
background: rgba(0, 0, 0, 0.05);
display: flex;
width: 40px;
height: 40px;
padding: var(--sm, 8px);
justify-content: center;
align-items: center;
gap: 10px;
aspect-ratio: 1/1;"
                        class="w-8 h-8 bg-gray-100 rounded border border-gray-300 flex items-center justify-center"
                      >
                       <img src="./assets/images/cc.svg">
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-gray-900"
                        >Rent and Utilities Casa</span
                      >
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex gap-3 items-center">
                        <div class="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            class="bg-green-500 h-2 rounded-full"
                            style="width: 60%"
                          ></div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">60</div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex justify-center space-x-1 flex-wrap">
                        <span
                          class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-2xl"
                          >Water</span
                        >
                        <span
                          class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-2xl"
                          >Telephone</span
                        >
                        <span
                          class="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-2xl"
                          >Rent</span
                        >
                        <span
                          class="px-1 py-1 text-xs bg-gray-100 text-gray-600 rounded-2xl"
                          >+2</span
                        >
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="text-sm font-medium text-gray-900"
                        >$1,000</span
                      >
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="text-sm font-medium text-gray-900"
                        >$1,000</span
                      >
                    </td>
                    <td class="px-6 py-4 row_btn text-center">
                    <button class="w-8  h-8 bg-green-100 text-white rounded-full flex items-center justify-center hover:bg-[#1BB15F]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.00016 5.16671C6.72402 5.16671 6.50016 5.39056 6.50016 5.66671C6.50016 5.94285 6.72402 6.16671 7.00016 6.16671H8.66683C8.94297 6.16671 9.16683 5.94285 9.16683 5.66671C9.16683 5.39056 8.94297 5.16671 8.66683 5.16671H7.00016Z"
                                fill="black"
                              />
                              <path
                                d="M7.00016 7.50004C6.72402 7.50004 6.50016 7.7239 6.50016 8.00004C6.50016 8.27618 6.72402 8.50004 7.00016 8.50004H10.3335C10.6096 8.50004 10.8335 8.27618 10.8335 8.00004C10.8335 7.7239 10.6096 7.50004 10.3335 7.50004H7.00016Z"
                                fill="black"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.16683 3.66671C2.16683 2.1019 3.43536 0.833374 5.00016 0.833374H12.3335C13.8983 0.833374 15.1668 2.1019 15.1668 3.66671V13.3334C15.1668 14.3459 14.346 15.1667 13.3335 15.1667H2.8335C1.72893 15.1667 0.833496 14.2713 0.833496 13.1667V12.6667C0.833496 12.0224 1.35583 11.5 2.00016 11.5H2.16683V3.66671ZM3.16683 11.5H11.3335C11.9778 11.5 12.5002 12.0224 12.5002 12.6667V13.3334C12.5002 13.7936 12.8733 14.1667 13.3335 14.1667C13.7937 14.1667 14.1668 13.7936 14.1668 13.3334V3.66671C14.1668 2.65419 13.346 1.83337 12.3335 1.83337H5.00016C3.98764 1.83337 3.16683 2.65419 3.16683 3.66671V11.5ZM1.8335 12.6667C1.8335 12.5747 1.90812 12.5 2.00016 12.5H11.3335C11.4255 12.5 11.5002 12.5747 11.5002 12.6667V13.3334C11.5002 13.6334 11.5723 13.9167 11.7001 14.1667H2.8335C2.28121 14.1667 1.8335 13.719 1.8335 13.1667V12.6667Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                    </td>
                  </tr>
    `;

    rowContainer.appendChild(row);
  });
});

//table row popup
const container12 = document.querySelector(".main-container");

const popup12 = document.querySelector(".row_popup");

console.log(popup12);

const close_pup12 = document.querySelector(".close_row_popup");

const btn12 = document.querySelector(".row_btn");
console.log(btn12);

btn12.addEventListener("click", () => {
  popup12.classList.add("row_active");
  container12.classList.add("row_active");
});

close_pup12.addEventListener("click", () => {
  popup12.classList.remove("row_active");
  container12.classList.remove("row_active");
});
