import React from 'react'

function Notice() {
  return (
    <React.Fragment>
    <div class="container flex justify-center ">
		<table class="w-[80%] flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Title</th>
					<th class="p-3 text-left" width="110px">Date</th>
				</tr>
				<tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Title</th>
					<th class="p-3 text-left" width="110px">Date</th>
				</tr>
                <tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Title</th>
                  <th class="p-3 text-left" width="110px">Date</th>
                </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Regarding Cleaning</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">29-Aug-2022</td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">Regarding Student Function</td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">23-Sep-2022</td>
                </tr>
			</tbody>
		</table>
	</div>
    </React.Fragment>
  )
}

export default Notice