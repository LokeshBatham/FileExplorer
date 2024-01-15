import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "data",
    initialState: [{
			name: 'Folder',
			type: 'folder',
			children: [
				{
					name: 'Folder1',
					type: 'folder',
					children: [
						{ name: 'File1.1', type: 'file' },
						{ name: 'File1.2', type: 'file' }
					]
				},
				{
					name: 'Folder2',
					type: 'folder',
					children: [
						{
							name: 'File2.1',
							type: 'file'
						},
						{
							name: 'Folder2.2',
							type: 'folder',
							children: [
								{ name: 'File2.2.1', type: 'file' },
								{ name: 'File2.2.2', type: 'file' }
							]
						}
					]
				}
			]
		}],
    
    reducers: {
        
        
    },
   
})


export default user.reducer ;

// export const {  } = user.actions