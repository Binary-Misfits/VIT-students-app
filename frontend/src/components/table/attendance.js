import React from 'react'

function Table() {
  return (
    <React.Fragment>
    <div class="container flex justify-center ">
		<table class="w-[80%] flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Actions</th>
				</tr>
				<tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Actions</th>
				</tr>
                <tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Date</th>
                  <th class="p-3 text-left" width="110px">Actions</th>
              </tr>
                <tr class="bg-[#F9C041] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Date</th>
                  <th class="p-3 text-left" width="110px">Actions</th>
              </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">29-Aug-2022</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3"><span className=' text-red-400 hover:text-red-600 hover:font-medium  cursor-pointer mx-2 hidden'>Absent</span><span className=' text-green-400 hover:text-gree-600 hover:font-medium mx-2 cursor-pointer'>Present</span></td>
				</tr>
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">30-Aug-2022</td>

					<td class="border-grey-light border hover:bg-gray-100 p-3"><span className=' text-red-400 hover:text-red-600 hover:font-medium  cursor-pointer mx-2 hidden'>Absent</span><span className=' text-green-400 hover:text-gree-600 hover:font-medium mx-2 cursor-pointer'>Present</span></td>
				</tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3">01-Sep-2022</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3"><span className=' text-red-400 hover:text-red-600 hover:font-medium  cursor-pointer mx-2'>Absent</span><span className=' text-green-400 hover:text-gree-600 hover:font-medium mx-2 hidden cursor-pointer'>Present</span></td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">02-Sep-2022</td>
 
                  <td class="border-grey-light border hover:bg-gray-100 p-3"><span className=' text-red-400 hover:text-red-600 hover:font-medium  cursor-pointer mx-2 hidden'>Absent</span><span className=' text-green-400 hover:text-gree-600 hover:font-medium mx-2 cursor-pointer'>Present</span></td>
                </tr>
			</tbody>
		</table>
	</div>
    </React.Fragment>
  )
}

export default Table