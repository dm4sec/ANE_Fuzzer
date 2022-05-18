// parse IOExternalMethodDispatch structure

#include <idc.idc>

static main()
{
  // http://www.bejson.com/convert/ox2str/
  // https://www.hex-rays.com/products/ida/debugger/scriptable.shtml
  // https://hex-rays.com/products/ida/support/idadoc/index.shtml
  // https://hex-rays.com/products/ida/support/idadoc/157.shtml
  // https://www.hex-rays.com/products/ida/support/idadoc/162.shtml
  // https://hex-rays.com/wp-content/static/products/ida/support/idapython_docs/idc.html
  // https://hex-rays.com/wp-content/static/products/ida/support/idapython_docs/ida_allins.html#ida_allins.ARM_mov


  auto ea, cref_ea;
  auto function, checkScalarInputCount, checkStructureInputSize, checkScalarOutputCount, checkStructureOutputSize;
  auto selector = 0;
  auto mangle_name;

  ea = ask_addr(0x3410, "start parsing from addr of: ");
  selector = ask_long(0, "selector starts from: ");
  msg( "start parsing struct of IOExternalMethodDispatch from addr: 0x%X, selector is set to %d.\n", ea, selector );


/*

struct IOExternalMethodDispatch {
	IOExternalMethodAction function;
	uint32_t               checkScalarInputCount;
	uint32_t               checkStructureInputSize;
	uint32_t               checkScalarOutputCount;
	uint32_t               checkStructureOutputSize;
};
*/

  while(ea != BADADDR)
  {
    // msg("0x%X\n", ea);

    mangle_name = get_func_name(dword(ea));
    if (mangle_name == 0)
    {
      break;
    }
    function = demangle_name(mangle_name, get_inf_attr(INF_LONG_DN));
    ea = ea + 8;

    checkScalarInputCount = word(ea);
    ea = ea + 4;
    checkStructureInputSize = word(ea);
    ea = ea + 4;
    checkScalarOutputCount = word(ea);
    ea = ea + 4;
    checkStructureOutputSize = word(ea);
    ea = ea + 4;

    msg( "|%d|%s|0x%X|0x%X|0x%X|0x%X|\n", selector, function, checkScalarInputCount, checkStructureInputSize, checkScalarOutputCount, checkStructureOutputSize);

    cref_ea = get_first_fcref_from(ea);
    if (cref_ea != BADADDR)
    {
      break;
    }
    selector = selector + 1;
  }

  msg( "Task finished.\n" );
}